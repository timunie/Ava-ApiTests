import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetPlatformHandle Method


Trys to get the platform handle for the TopLevel-derived control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPlatformHandle? TryGetPlatformHandle()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetPlatformHandle As IPlatformHandle
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetPlatformHandle : unit -> IPlatformHandle 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TopLevel.cs#L431" title="View the source code">View Source</a>



#### Return Value
IPlatformHandle  
An IPlatformHandle describing the window handle, or null if the handle could not be retrieved.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
