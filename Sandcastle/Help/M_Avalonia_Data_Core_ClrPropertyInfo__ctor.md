---
title:ClrPropertyInfo Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ClrPropertyInfo Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Core_ClrPropertyInfo">ClrPropertyInfo</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public ClrPropertyInfo(
	string name,
	Func<Object, Object?>? getter,
	Action<Object, Object?>? setter,
	Type propertyType
)
```
**VB**
``` VB
Public Sub New ( 
	name As String,
	getter As Func(Of Object, Object),
	setter As Action(Of Object, Object),
	propertyType As Type
)
```
**F#**
``` F#
new : 
        name : string * 
        getter : Func<Object, Object> * 
        setter : Action<Object, Object> * 
        propertyType : Type -> ClrPropertyInfo
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_ClrPropertyInfo">ClrPropertyInfo Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
