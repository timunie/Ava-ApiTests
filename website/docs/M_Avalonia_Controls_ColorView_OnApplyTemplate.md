# OnApplyTemplate Method


Called when the control's template is applied. In simple terms, this means the method is called just before the control is displayed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void OnApplyTemplate(
	TemplateAppliedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub OnApplyTemplate ( 
	e As TemplateAppliedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnApplyTemplate : 
        e : TemplateAppliedEventArgs -> unit 
override OnApplyTemplate : 
        e : TemplateAppliedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.cs#L178" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Primitives_TemplateAppliedEventArgs">TemplateAppliedEventArgs</a></dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

