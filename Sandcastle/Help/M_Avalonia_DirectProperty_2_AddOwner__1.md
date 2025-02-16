---
title:AddOwner&lt;TNewOwner&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddOwner&lt;TNewOwner&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public DirectProperty<TNewOwner, TValue> AddOwner<TNewOwner>(
	Func<TNewOwner, TValue> getter,
	Action<TNewOwner, TValue>? setter = null,
	TValue unsetValue = null,
	BindingMode defaultBindingMode = BindingMode.Default,
	bool enableDataValidation = false
)
where TNewOwner : AvaloniaObject

```
**VB**
``` VB
Public Function AddOwner(Of TNewOwner As AvaloniaObject) ( 
	getter As Func(Of TNewOwner, TValue),
	Optional setter As Action(Of TNewOwner, TValue) = Nothing,
	Optional unsetValue As TValue = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.Default,
	Optional enableDataValidation As Boolean = false
) As DirectProperty(Of TNewOwner, TValue)
```
**F#**
``` F#
member AddOwner : 
        getter : Func<'TNewOwner, 'TValue> * 
        ?setter : Action<'TNewOwner, 'TValue> * 
        ?unsetValue : 'TValue * 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : bool 
(* Defaults:
        let _setter = defaultArg setter null
        let _unsetValue = defaultArg unsetValue null
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.Default
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> DirectProperty<'TNewOwner, 'TValue>  when 'TNewOwner : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_DirectProperty_2">TValue</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_DirectProperty_2">DirectProperty</a>(TNewOwner, <a href="T_Avalonia_DirectProperty_2">TValue</a>)

## See Also


#### Reference
<a href="T_Avalonia_DirectProperty_2">DirectProperty(TOwner, TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
