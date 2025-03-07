# BindingPlugins Class


Holds a registry of plugins used for bindings.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class BindingPlugins
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class BindingPlugins
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type BindingPlugins = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/BindingPlugins.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  BindingPlugins</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_BindingPlugins_DataValidators">DataValidators</a></td>
<td>An ordered collection of validation checker plugins that can be used to customize the validation of view model and model data.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_BindingPlugins_PropertyAccessors">PropertyAccessors</a></td>
<td>An ordered collection of property accessor plugins that can be used to customize the reading and subscription of property values on a type.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_BindingPlugins_StreamHandlers">StreamHandlers</a></td>
<td>An ordered collection of stream plugins that can be used to customize the behavior of the '^' stream binding operator.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  
