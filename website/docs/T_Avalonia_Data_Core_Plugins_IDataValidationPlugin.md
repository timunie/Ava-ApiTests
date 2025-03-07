# IDataValidationPlugin Interface


Defines how data validation is observed by an BindingExpression.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDataValidationPlugin
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDataValidationPlugin
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDataValidationPlugin = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IDataValidationPlugin.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IDataValidationPlugin_Match">Match(WeakReference(Object), String)</a></td>
<td>Checks whether this plugin can handle data validation on the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IDataValidationPlugin_Start">Start(WeakReference(Object), String, IPropertyAccessor)</a></td>
<td>Starts monitoring the data validation state of a property on an object.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  
