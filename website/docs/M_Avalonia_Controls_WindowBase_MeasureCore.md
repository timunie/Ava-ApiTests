# MeasureCore Method


Overrides the core measure logic for windows.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size MeasureCore(
	Size availableSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function MeasureCore ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/WindowBase.cs#L282" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The available size.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The measured size.

## Remarks
The layout logic for top-level windows is different than for other controls because they don't have a parent, meaning that many layout properties handled by the default MeasureCore (such as margins and alignment) make no sense.

## See Also


#### Reference
<a href="T_Avalonia_Controls_WindowBase">WindowBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

