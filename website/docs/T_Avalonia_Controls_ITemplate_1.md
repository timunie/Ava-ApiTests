# ITemplate&lt;TControl&gt; Interface


Creates a control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ITemplate<TControl> : ITemplate
where TControl : Control

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ITemplate(Of TControl As Control)
	Inherits ITemplate
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ITemplate<'TControl when 'TControl : Control> = 
    interface
        interface ITemplate
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/ITemplate%601.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Styling_ITemplate">ITemplate</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of control.</dd></dl>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ITemplate_1_Build">Build()</a></td>
<td>Creates the control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

