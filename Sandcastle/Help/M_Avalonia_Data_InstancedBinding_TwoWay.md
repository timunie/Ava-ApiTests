---
title:TwoWay Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TwoWay Method




## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static InstancedBinding TwoWay(
	IObservable<Object?> observable,
	IObserver<Object?> observer,
	BindingPriority priority = BindingPriority.LocalValue
)
```
**VB**
``` VB
Public Shared Function TwoWay ( 
	observable As IObservable(Of Object),
	observer As IObserver(Of Object),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As InstancedBinding
```
**F#**
``` F#
static member TwoWay : 
        observable : IObservable<Object> * 
        observer : IObserver<Object> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> InstancedBinding 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a>

## See Also


#### Reference
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
