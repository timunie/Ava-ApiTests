# TryGetWellKnownFolderAsync Method


Attempts to read folder from the file-system by its path



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IStorageFolder?> TryGetWellKnownFolderAsync(
	WellKnownFolder wellKnownFolder
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetWellKnownFolderAsync ( 
	wellKnownFolder As WellKnownFolder
) As Task(Of IStorageFolder)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetWellKnownFolderAsync : 
        wellKnownFolder : WellKnownFolder -> Task<IStorageFolder> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_WellKnownFolder">WellKnownFolder</a></dt><dd>Well known folder identifier.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>)  
Folder or null if it doesn't exist.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

