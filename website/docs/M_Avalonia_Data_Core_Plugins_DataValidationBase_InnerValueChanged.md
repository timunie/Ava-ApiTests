# InnerValueChanged Method


Called when the inner <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> notifies with a new value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void InnerValueChanged(
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub InnerValueChanged ( 
	value As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InnerValueChanged : 
        value : Object -> unit 
override InnerValueChanged : 
        value : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/DataValidationBase.cs#L71" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value.</dd></dl>Notifies the observer that the value has changed. The value will be wrapped in a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> if it is not already a binding notification.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_DataValidationBase">DataValidationBase Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  
