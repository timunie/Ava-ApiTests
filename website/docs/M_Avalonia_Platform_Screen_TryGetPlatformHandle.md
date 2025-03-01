import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetPlatformHandle Method


Tries to get the platform handle for the Screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual IPlatformHandle? TryGetPlatformHandle()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Function TryGetPlatformHandle As IPlatformHandle
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetPlatformHandle : unit -> IPlatformHandle 
override TryGetPlatformHandle : unit -> IPlatformHandle 
```
</TabItem>
</Tabs>



#### Return Value
IPlatformHandle  
An IPlatformHandle describing the screen handle, or null if the handle could not be retrieved.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
