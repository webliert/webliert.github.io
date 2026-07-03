---
title: MoveIt2 快速入门
date: 2026-07-03
tags: ['ROS2', 'MoveIt2', '运动规划']
---

# MoveIt2 快速入门

> ⚠️ 这是一篇占位文章，等我做完实验再补充完整内容。
> 这里先展示一下 Markdown 渲染效果。

MoveIt2 是 ROS2 下最常用的运动规划框架，可以让你不用关心逆解细节，
直接告诉它"把机械臂末端移动到 A 点"，它会自己规划出一条无碰撞的轨迹。

## 安装

```bash
sudo apt install ros-${ROS_DISTRO}-moveit
sudo apt install ros-${ROS_DISTRO}-moveit-ros-planning
```

## 启动 demo

```bash
ros2 launch moveit2_tutorials demo.launch.py
```

## 代码示例：用 Python 给机械臂发目标

```python
import rclpy
from rclpy.node import Node
from moveit_msgs.msg import MoveGroupGoal, PlanningScene
from geometry_msgs.msg import PoseStamped

class MoveItController(Node):
    def __init__(self):
        super().__init__('moveit_controller')
        self.action_client = ActionClient(
            self, MoveGroupAction, '/move_action'
        )

    def move_to(self, x, y, z):
        goal = MoveGroupGoal()
        goal.request.group_name = 'manipulator'
        # ... 设置目标位姿 ...
        self.action_client.send_goal_async(goal)
```

## 常见问题

1. **规划失败**：检查 `PlanningScene` 里有没有正确加载机械臂 URDF
2. **轨迹执行卡顿**：降低 `max_velocity_scaling_factor`
3. **碰撞检测异常**：确认 `collision_mesh` 路径正确

## 参考资料

- [MoveIt2 官方文档](https://moveit.picknik.ai/main/index.html)
- [ROS2 中文社区](https://fishros.com/)
- [Pinocchio 运动学库](https://github.com/stack-of-tasks/pinocchio)

---

> 完整版等我把 demo 跑通后再写，先挖个坑。