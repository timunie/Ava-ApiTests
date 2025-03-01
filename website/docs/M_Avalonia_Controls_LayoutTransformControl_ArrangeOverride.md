import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ArrangeOverride Method


Provides the behavior for the "Arrange" pass of layout.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  Size</dt><dd>The final area within the parent that this element should use to arrange itself and its children.</dd></dl>

#### Return Value
Size  
The actual size used.

## See Also


#### Reference
<a href="T_Avalonia_Controls_LayoutTransformControl">LayoutTransformControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
