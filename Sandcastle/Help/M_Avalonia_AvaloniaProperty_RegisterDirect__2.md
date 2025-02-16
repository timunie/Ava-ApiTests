---
title:RegisterDirect&lt;TOwner, TValue&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RegisterDirect&lt;TOwner, TValue&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static DirectProperty<TOwner, TValue> RegisterDirect<TOwner, TValue>(
	string name,
	Func<TOwner, TValue> getter,
	Action<TOwner, TValue>? setter = null,
	TValue unsetValue = null,
	BindingMode defaultBindingMode = BindingMode.OneWay,
	bool enableDataValidation = false
)
where TOwner : AvaloniaObject

```
**VB**
``` VB
Public Shared Function RegisterDirect(Of TOwner As AvaloniaObject, TValue) ( 
	name As String,
	getter As Func(Of TOwner, TValue),
	Optional setter As Action(Of TOwner, TValue) = Nothing,
	Optional unsetValue As TValue = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.OneWay,
	Optional enableDataValidation As Boolean = false
) As DirectProperty(Of TOwner, TValue)
```
**F#**
``` F#
static member RegisterDirect : 
        name : string * 
        getter : Func<'TOwner, 'TValue> * 
        ?setter : Action<'TOwner, 'TValue> * 
        ?unsetValue : 'TValue * 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : bool 
(* Defaults:
        let _setter = defaultArg setter null
        let _unsetValue = defaultArg unsetValue null
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.OneWay
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> DirectProperty<'TOwner, 'TValue>  when 'TOwner : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TOwner, TValue)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TOwner, TValue)  (Optional)</dt><dd> </dd><dt>  TValue  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_DirectProperty_2">DirectProperty</a>(TOwner, TValue)

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
