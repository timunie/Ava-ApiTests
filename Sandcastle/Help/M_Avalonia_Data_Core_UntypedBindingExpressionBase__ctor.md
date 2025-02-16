---
title:UntypedBindingExpressionBase Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# UntypedBindingExpressionBase Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public UntypedBindingExpressionBase(
	BindingPriority defaultPriority,
	AvaloniaProperty? targetProperty = null,
	bool isDataValidationEnabled = false
)
```
**VB**
``` VB
Public Sub New ( 
	defaultPriority As BindingPriority,
	Optional targetProperty As AvaloniaProperty = Nothing,
	Optional isDataValidationEnabled As Boolean = false
)
```
**F#**
``` F#
new : 
        defaultPriority : BindingPriority * 
        ?targetProperty : AvaloniaProperty * 
        ?isDataValidationEnabled : bool 
(* Defaults:
        let _targetProperty = defaultArg targetProperty null
        let _isDataValidationEnabled = defaultArg isDataValidationEnabled false
*)
-> UntypedBindingExpressionBase
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
