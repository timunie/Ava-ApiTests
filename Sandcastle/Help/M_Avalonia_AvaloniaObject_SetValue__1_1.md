---
title:SetValue&lt;T&gt;(StyledProperty&lt;T&gt;, T, BindingPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# SetValue&lt;T&gt;(StyledProperty&lt;T&gt;, T, BindingPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public IDisposable? SetValue<T>(
	StyledProperty<T> property,
	T value,
	BindingPriority priority = BindingPriority.LocalValue
)

```
**VB**
``` VB
Public Function SetValue(Of T) ( 
	property As StyledProperty(Of T),
	value As T,
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
**F#**
``` F#
member SetValue : 
        property : StyledProperty<'T> * 
        value : 'T * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd> </dd><dt>  T</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetValue">SetValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
