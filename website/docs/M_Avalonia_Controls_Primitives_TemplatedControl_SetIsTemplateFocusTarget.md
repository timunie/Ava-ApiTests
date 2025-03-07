# SetIsTemplateFocusTarget Method


Sets the value of the IsTemplateFocusTargetProperty attached property on a control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetIsTemplateFocusTarget(
	Control control,
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetIsTemplateFocusTarget ( 
	control As Control,
	value As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetIsTemplateFocusTarget : 
        control : Control * 
        value : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/TemplatedControl.cs#L286" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The property value.</dd></dl>When a control is navigated to using the keyboard, a focus adorner is shown - usually around the control itself. However if the TemplatedControl.IsTemplateFocusTarget attached property is set to true on an element in the control template, then the focus adorner will be shown around that control instead.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
