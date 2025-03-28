# TryGetPlatformHandle Method


Tries to get the platform handle for the Screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Screen.cs#L124" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a>  
An <a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a> describing the screen handle, or null if the handle could not be retrieved.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

