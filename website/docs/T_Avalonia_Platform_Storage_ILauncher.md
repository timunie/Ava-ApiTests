# ILauncher Interface


Starts the default app associated with the specified file or URI.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ILauncher
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ILauncher
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ILauncher = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/ILauncher.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_ILauncher_LaunchFileAsync">LaunchFileAsync(IStorageItem)</a></td>
<td>Starts the default app associated with the specified storage file or folder.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_ILauncher_LaunchUriAsync">LaunchUriAsync(Uri)</a></td>
<td>Starts the default app associated with the URI scheme name for the specified URI.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_LauncherExtensions_LaunchDirectoryInfoAsync">LaunchDirectoryInfoAsync(DirectoryInfo)</a></td>
<td>Starts the default app associated with the specified storage directory (folder).<br />(Defined by <a href="T_Avalonia_Platform_Storage_LauncherExtensions">LauncherExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_LauncherExtensions_LaunchFileInfoAsync">LaunchFileInfoAsync(FileInfo)</a></td>
<td>Starts the default app associated with the specified storage file.<br />(Defined by <a href="T_Avalonia_Platform_Storage_LauncherExtensions">LauncherExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
