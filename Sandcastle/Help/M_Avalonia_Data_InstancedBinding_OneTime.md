---
title:OneTime(IObservable&lt;Object&gt;, BindingPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OneTime(IObservable&lt;Object&gt;, BindingPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static InstancedBinding OneTime(
	IObservable<Object?> observable,
	BindingPriority priority = BindingPriority.LocalValue
)
```
**VB**
``` VB
Public Shared Function OneTime ( 
	observable As IObservable(Of Object),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As InstancedBinding
```
**F#**
``` F#
static member OneTime : 
        observable : IObservable<Object> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> InstancedBinding 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a>

## See Also


#### Reference
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding Class</a>  
<a href="Overload_Avalonia_Data_InstancedBinding_OneTime">OneTime Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
