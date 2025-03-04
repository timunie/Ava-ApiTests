import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UnregisterAnchorCandidate Method


Unregisters a control as a potential scroll anchor candidate.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void UnregisterAnchorCandidate(
	Control element
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub UnregisterAnchorCandidate ( 
	element As Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract UnregisterAnchorCandidate : 
        element : Control -> unit 
override UnregisterAnchorCandidate : 
        element : Control -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ScrollViewer.cs#L667" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>A control within the subtree of the <a href="T_Avalonia_Controls_IScrollAnchorProvider">IScrollAnchorProvider</a>.</dd></dl>

#### Implements
<a href="M_Avalonia_Controls_IScrollAnchorProvider_UnregisterAnchorCandidate">IScrollAnchorProvider.UnregisterAnchorCandidate(Control)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
