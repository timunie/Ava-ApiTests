# IDataTemplate Interface


Interface representing a template used to build a control for a piece of data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDataTemplate : ITemplate<Object, Control>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDataTemplate
	Inherits ITemplate(Of Object, Control)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDataTemplate = 
    interface
        interface ITemplate<Object, Control>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/IDataTemplate.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_ITemplate_2_Build">Build(TParam)</a></td>
<td>Creates the control.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate(TParam, TControl)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_IDataTemplate_Match">Match(Object)</a></td>
<td>Checks to see if this data template matches the specified data.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
