---
title:StyledPropertyMetadata&lt;TValue&gt; Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StyledPropertyMetadata&lt;TValue&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata(TValue)</a> class



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public StyledPropertyMetadata(
	Optional<TValue> defaultValue = default,
	BindingMode defaultBindingMode = BindingMode.Default,
	Func<AvaloniaObject, TValue, TValue>? coerce = null,
	bool enableDataValidation = false
)
```
**VB**
``` VB
Public Sub New ( 
	Optional defaultValue As Optional(Of TValue) = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.Default,
	Optional coerce As Func(Of AvaloniaObject, TValue, TValue) = Nothing,
	Optional enableDataValidation As Boolean = false
)
```
**F#**
``` F#
new : 
        ?defaultValue : Optional<'TValue> * 
        ?defaultBindingMode : BindingMode * 
        ?coerce : Func<AvaloniaObject, 'TValue, 'TValue> * 
        ?enableDataValidation : bool 
(* Defaults:
        let _defaultValue = defaultArg defaultValue new Optional<'TValue>()
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.Default
        let _coerce = defaultArg coerce null
        let _enableDataValidation = defaultArg enableDataValidation false
*)
-> StyledPropertyMetadata
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_StyledPropertyMetadata_1">TValue</a>)  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>, <a href="T_Avalonia_StyledPropertyMetadata_1">TValue</a>, <a href="T_Avalonia_StyledPropertyMetadata_1">TValue</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
