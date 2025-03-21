# GetDynamicValue(Object) Method


Updates the data context of the framework element and returns the updated binding value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T GetDynamicValue(
	Object? o
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetDynamicValue ( 
	o As Object
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetDynamicValue : 
        o : Object -> 'T 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L2133" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to use as the data context.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1">T</a>  
Returns the evaluated T value of the bound dependency property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1">AutoCompleteBox.BindingEvaluator(T) Class</a>  
<a href="Overload_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1_GetDynamicValue">GetDynamicValue Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

