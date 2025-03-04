import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# WorkingArea Property


Gets the actual working-area pixel-size of the screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PixelRect WorkingArea { get; protected set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property WorkingArea As PixelRect
	Get
	Protected Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member WorkingArea : PixelRect with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/Screen.cs#L88" title="View the source code">View Source</a>



#### Property Value
PixelRect

## 
This area may be smaller than <a href="Bounds" target="_blank" rel="noopener noreferrer">Bounds</a> to account for notches and other block-out areas such as taskbars etc.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
