# IControlTemplate Interface


Interface representing a template used to build a <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IControlTemplate : ITemplate<TemplatedControl, TemplateResult<Control>>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IControlTemplate
	Inherits ITemplate(Of TemplatedControl, TemplateResult(Of Control))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IControlTemplate = 
    interface
        interface ITemplate<TemplatedControl, TemplateResult<Control>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/IControlTemplate.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate</a>(<a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>, <a href="T_Avalonia_Controls_Templates_TemplateResult_1">TemplateResult</a>(<a href="T_Avalonia_Controls_Control">Control</a>))</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Templates_ITemplate_2_Build">Build(TParam)</a></td>
<td>Creates the control.<br />(Inherited from <a href="T_Avalonia_Controls_Templates_ITemplate_2">ITemplate(TParam, TControl)</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
