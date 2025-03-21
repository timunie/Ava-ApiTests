# ArrangeOverride Method


Provides the behavior for the "Arrange" pass of layout.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size ArrangeOverride(
	Size finalSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function ArrangeOverride ( 
	finalSize As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeOverride : 
        finalSize : Size -> Size 
override ArrangeOverride : 
        finalSize : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/LayoutTransformControl.cs#L64" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The final area within the parent that this element should use to arrange itself and its children.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The actual size used.

## See Also


#### Reference
<a href="T_Avalonia_Controls_LayoutTransformControl">LayoutTransformControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

