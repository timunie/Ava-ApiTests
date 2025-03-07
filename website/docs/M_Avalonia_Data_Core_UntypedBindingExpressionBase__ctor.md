# UntypedBindingExpressionBase Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public UntypedBindingExpressionBase(
	BindingPriority defaultPriority,
	AvaloniaProperty? targetProperty = null,
	bool isDataValidationEnabled = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	defaultPriority As BindingPriority,
	Optional targetProperty As AvaloniaProperty = Nothing,
	Optional isDataValidationEnabled As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></dt><dd>The default binding priority for the expression.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  (Optional)</dt><dd>The target property being bound to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether data validation is enabled.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
