# OnVisualParentChanged Method


Called when the control's visual parent changes.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override sealed void OnVisualParentChanged(
	Visual? oldParent,
	Visual? newParent
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides NotOverridable Sub OnVisualParentChanged ( 
	oldParent As Visual,
	newParent As Visual
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnVisualParentChanged : 
        oldParent : Visual * 
        newParent : Visual -> unit 
override OnVisualParentChanged : 
        oldParent : Visual * 
        newParent : Visual -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs#L827" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The old visual parent.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The new visual parent.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Layout_Layoutable">Layoutable Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

