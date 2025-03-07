# IStreamPlugin Interface


Defines a plugin that handles the '^' stream binding operator.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IStreamPlugin
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IStreamPlugin
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IStreamPlugin = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IStreamPlugin.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IStreamPlugin_Match">Match(WeakReference(Object))</a></td>
<td>Checks whether this plugin handles the specified value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IStreamPlugin_Start">Start(WeakReference(Object))</a></td>
<td>Starts producing output based on the specified value.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  
