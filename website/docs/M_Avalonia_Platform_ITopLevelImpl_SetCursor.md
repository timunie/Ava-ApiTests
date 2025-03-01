import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetCursor Method


Sets the cursor associated with the toplevel.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetCursor(
	ICursorImpl? cursor
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetCursor ( 
	cursor As ICursorImpl
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetCursor : 
        cursor : ICursorImpl -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  ICursorImpl</dt><dd>The cursor. Use null for default cursor</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
