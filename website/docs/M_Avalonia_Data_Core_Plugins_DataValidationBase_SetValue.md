# SetValue Method


Sets the property value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override bool SetValue(
	Object? value,
	BindingPriority priority
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function SetValue ( 
	value As Object,
	priority As BindingPriority
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetValue : 
        value : Object * 
        priority : BindingPriority -> bool 
override SetValue : 
        value : Object * 
        priority : BindingPriority -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/DataValidationBase.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to set. Guaranteed to be of a valid type for the property.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></dt><dd>The priority with which to set the value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the property was set; false if the property could not be set.

#### Implements
<a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessor_SetValue">IPropertyAccessor.SetValue(Object, BindingPriority)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_DataValidationBase">DataValidationBase Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

