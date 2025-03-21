# MeasureCore Method


The default implementation of the control's measure pass.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Size MeasureCore(
	Size availableSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function MeasureCore ( 
	availableSize As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MeasureCore : 
        availableSize : Size -> Size 
override MeasureCore : 
        availableSize : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs#L531" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size available to the control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The desired size for the control.

## Remarks
This method calls <a href="M_Avalonia_Layout_Layoutable_MeasureOverride">MeasureOverride(Size)</a> which is probably the method you want to override in order to modify a control's arrangement.

## See Also


#### Reference
<a href="T_Avalonia_Layout_Layoutable">Layoutable Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

