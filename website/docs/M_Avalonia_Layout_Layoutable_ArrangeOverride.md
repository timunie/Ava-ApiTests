# ArrangeOverride Method


Positions child elements as part of a layout pass.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Size ArrangeOverride(
	Size finalSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function ArrangeOverride ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs#L715" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size available to the control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The actual size used.

## See Also


#### Reference
<a href="T_Avalonia_Layout_Layoutable">Layoutable Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

