#!/bin/sh
#
# Dependence: xdotool, gnome-terminal ( 可替换 )

# 为初次运行初始化记录文件
if [ ! -e /tmp/terminal ]; then
        echo 1 > /tmp/terminal
fi

# 读取 windowid 记录
windowid=`cat /tmp/terminal`
# 利用 xwininfo 的返回值判断记录的 windowid 对应窗口是否仍然存在
checkwindowid=`xwininfo -int -id $windowid | grep xwininfo | awk '{print $4}'`

if [ "$windowid" = "$checkwindowid" ]; then
        # 存在，执行隐藏显示切换逻辑
        IsViewable=`xwininfo -int -id $windowid | grep Map | awk '{print $3}'`
        
        if [ "$IsViewable" = "IsUnMapped" ]; then
                echo IsUnMapped
                xdotool windowmap $checkwindowid
                # 以固定大小打开
                xdotool windowsize --usehints $checkwindowid 1 1
                xdotool windowactivate $checkwindowid
                # 等待弹出效果
                sleep 0.1
                # 获取最大化按钮坐标
                x=`xdotool getmouselocation | awk '{print $1}' | sed 's/x://g'`
                y=`xdotool getmouselocation | awk '{print $2}' | sed 's/y://g'`
                # 点击最大化按钮
                # xdotool mousemove --window $checkwindowid 130 30 click 1 mousemove $x $y
		xdotool mousemove --window $checkwindowid 180 80 click 1 #mousemove $x $y
        else
                echo IsNotUnMapped
                xdotool windowunmap $checkwindowid
        fi
else
        # 不存在，执行打开新终端逻辑,打开新终端的同时将 windowid 保存
        nohup gnome-terminal --maximize >/dev/null 2>&1 &
        
        sleep 0.6
        xdotool click 1
        sleep 0.1

        xdotool getactivewindow > /tmp/terminal
fi
