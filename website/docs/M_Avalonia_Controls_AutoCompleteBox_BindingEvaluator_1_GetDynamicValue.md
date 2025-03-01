import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetDynamicValue(Object, Boolean) Method


Updates the data context of the framework element and returns the updated binding value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T GetDynamicValue(
	Object o,
	bool clearDataContext
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetDynamicValue ( 
	o As Object,
	clearDataContext As Boolean
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetDynamicValue : 
        o : Object * 
        clearDataContext : bool -> 'T 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to use as the data context.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If set to true, this parameter will clear the data context immediately after retrieving the value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1">T</a>  
Returns the evaluated T value of the bound dependency property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1">AutoCompleteBox.BindingEvaluator(T) Class</a>  
<a href="Overload_Avalonia_Controls_AutoCompleteBox_BindingEvaluator_1_GetDynamicValue">GetDynamicValue Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
