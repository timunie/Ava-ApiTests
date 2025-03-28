# OnApplyTemplate Method


Called when the control's template is applied. In simple terms, this means the method is called just before the control is displayed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnApplyTemplate(
	TemplateAppliedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnApplyTemplate ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/TemplatedControl.cs#L395" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Primitives_TemplateAppliedEventArgs">TemplateAppliedEventArgs</a></dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

