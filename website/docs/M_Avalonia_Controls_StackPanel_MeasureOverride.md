import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# MeasureOverride Method


General StackPanel layout behavior is to grow unbounded in the "stacking" direction (Size To Content). Children in this dimension are encouraged to be as large as they like. In the other dimension, StackPanel will assume the maximum size of its children.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size MeasureOverride(
	Size availableSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function MeasureOverride ( 
	availableSize As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MeasureOverride : 
        availableSize : Size -> Size 
override MeasureOverride : 
        availableSize : Size -> Size 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  Size</dt><dd>Constraint</dd></dl>

#### Return Value
Size  
Desired size

## See Also


#### Reference
<a href="T_Avalonia_Controls_StackPanel">StackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
