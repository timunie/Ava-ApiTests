---
title:Bind&lt;T&gt;(StyledProperty&lt;T&gt;, IObservable&lt;Object&gt;, BindingPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Bind&lt;T&gt;(StyledProperty&lt;T&gt;, IObservable&lt;Object&gt;, BindingPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public IDisposable Bind<T>(
	StyledProperty<T> property,
	IObservable<Object?> source,
	BindingPriority priority = BindingPriority.LocalValue
)

```
**VB**
``` VB
Public Function Bind(Of T) ( 
	property As StyledProperty(Of T),
	source As IObservable(Of Object),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
**F#**
``` F#
member Bind : 
        property : StyledProperty<'T> * 
        source : IObservable<Object> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_Bind">Bind Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
