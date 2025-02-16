---
title:Register&lt;TOwner, TValue&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Register&lt;TOwner, TValue&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static StyledProperty<TValue> Register<TOwner, TValue>(
	string name,
	TValue defaultValue = null,
	bool inherits = false,
	BindingMode defaultBindingMode = BindingMode.OneWay,
	Func<TValue, bool>? validate = null,
	Func<AvaloniaObject, TValue, TValue>? coerce = null,
	bool enableDataValidation = false
)
where TOwner : AvaloniaObject

```
**VB**
``` VB
Public Shared Function Register(Of TOwner As AvaloniaObject, TValue) ( 
	name As String,
	Optional defaultValue As TValue = Nothing,
	Optional inherits As Boolean = false,
	Optional defaultBindingMode As BindingMode = BindingMode.OneWay,
	Optional validate As Func(Of TValue, Boolean) = Nothing,
	Optional coerce As Func(Of AvaloniaObject, TValue, TValue) = Nothing,
	Optional enableDataValidation As Boolean = false
) As StyledProperty(Of TValue)
```
**F#**
``` F#
static member Register : 
        name : string * 
        ?defaultValue : 'TValue * 
        ?inherits : bool * 
        ?defaultBindingMode : BindingMode * 
        ?validate : Func<'TValue, bool> * 
        ?coerce : Func<AvaloniaObject, 'TValue, 'TValue> * 
        ?enableDataValidation : bool 
(* Defaults:
        let _defaultValue = defaultArg defaultValue null
        let _inherits = defaultArg inherits false
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.OneWay
        let _validate = defaultArg validate null
        let _coerce = defaultArg coerce null
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> StyledProperty<'TValue>  when 'TOwner : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  TValue  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TValue, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>, TValue, TValue)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(TValue)

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
