---
outline: deep
---

# MySQL 基本操作

---

#### 查询

```txt
查表   select * from 表名
具体查字段名  select * from 表名 where 字段名
```

##### in

```txt
eg: select * from 表名 where not 字段名 in (select f_id from 表名2 where 字段名2 = 11) -- 表达式
```

##### 查看所有列 -- 注释

```txt
show full columns from 表名
```

##### 条件查询

```txt
比较运算符 <、>、>=、<=、!、=、
eg: select * from 表名 where 字段名 = 123
逻辑运算符 and--逻辑且、or--逻辑或、not--逻辑非
eg: select * from 表名 where not 字段名 = 123 and 字段2 = 3
```

##### 模糊查询

```txt
like %--替换一个或多个、__--占位符替换一个
eg: select * from 表名 where  字段名 like '张%'
rlike--正则
```

##### 范围查询

```txt
between and
eg:select * from 表名 where 字段名 between xx and xx
```

##### 排序

```txt
order by -- asc(升序)/desc(降序)
eg:select * from 表名 where 字段名1,字段名2 order by desc
```

##### 分组

```txt
group by -- count(*)
eg:select count(*),字段 from 表名  group by 字段
排序 eg:select count(*),字段 from 表名 where  group by 字段 order by count(*) desc
```

##### 函数

```txt
-- 时间处理
DATE_FORMAT(f_create_time,'%Y-%m-%d') -- 2021-08-11
```
