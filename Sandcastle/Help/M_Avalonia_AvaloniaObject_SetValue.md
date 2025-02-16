---
title:SetValue(AvaloniaProperty, Object, BindingPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# SetValue(AvaloniaProperty, Object, BindingPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public IDisposable? SetValue(
	AvaloniaProperty property,
	Object? value,
	BindingPriority priority = BindingPriority.LocalValue
)
```
**VB**
``` VB
Public Function SetValue ( 
	property As AvaloniaProperty,
	value As Object,
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
**F#**
``` F#
member SetValue : 
        property : AvaloniaProperty * 
        value : Object * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetValue">SetValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
