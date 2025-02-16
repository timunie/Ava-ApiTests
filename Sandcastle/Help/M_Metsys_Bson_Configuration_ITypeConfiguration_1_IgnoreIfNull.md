---
title:IgnoreIfNull Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IgnoreIfNull Method




## Definition
**Namespace:** <a href="N_Metsys_Bson_Configuration">Metsys.Bson.Configuration</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

**C#**
``` C#
ITypeConfiguration<T> IgnoreIfNull(
	Expression<Func<T, Object>> expression
)
```
**VB**
``` VB
Function IgnoreIfNull ( 
	expression As Expression(Of Func(Of T, Object))
) As ITypeConfiguration(Of T)
```
**F#**
``` F#
abstract IgnoreIfNull : 
        expression : Expression<Func<'T, Object>> -> ITypeConfiguration<'T> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression-1" target="_blank" rel="noopener noreferrer">Expression</a>(<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Metsys_Bson_Configuration_ITypeConfiguration_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>))</dt><dd> </dd></dl>

#### Return Value
<a href="T_Metsys_Bson_Configuration_ITypeConfiguration_1">ITypeConfiguration</a>(<a href="T_Metsys_Bson_Configuration_ITypeConfiguration_1">T</a>)

## See Also


#### Reference
<a href="T_Metsys_Bson_Configuration_ITypeConfiguration_1">ITypeConfiguration(T) Interface</a>  
<a href="N_Metsys_Bson_Configuration">Metsys.Bson.Configuration Namespace</a>  
