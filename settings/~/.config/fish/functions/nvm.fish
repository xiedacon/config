function nvm
  __nvm $argv
  if test $status -eq 0
    __init_default_node
  end
end

function __nvm
  bass source ~/.nvm/nvm.sh --no-use ';' nvm $argv
end

function __nvm_which_default
  echo (__nvm which default 2>/dev/null)
end

function __init_default_node
  if [ (__nvm_which_default) ]
    set __node_path (__nvm_which_default | sed 's/bin\/node/bin/')
    for __filename in (ls $__node_path)
      set __file $__node_path/$__filename
      set __local_bin_file ~/.local/bin/$__filename
      if not [ -e $__local_bin_file ]
        rm $__local_bin_file &>/dev/null
        ln -s $__file $__local_bin_file
      end
      if not [ $__local_bin_file -ef $__file ]
        rm $__local_bin_file &>/dev/null
        ln -s $__file $__local_bin_file
      end
    end
  end
end
