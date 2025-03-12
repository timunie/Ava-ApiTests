# IPropertyAccessorPlugin Interface


Defines how a member is read, written and observed by a binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPropertyAccessorPlugin
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPropertyAccessorPlugin
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPropertyAccessorPlugin = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IPropertyAccessorPlugin.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessorPlugin_Match">Match(Object, String)</a></td>
<td>Checks whether this plugin can handle accessing the properties of the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessorPlugin_Start">Start(WeakReference(Object), String)</a></td>
<td>Starts monitoring the value of a property on an object.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

