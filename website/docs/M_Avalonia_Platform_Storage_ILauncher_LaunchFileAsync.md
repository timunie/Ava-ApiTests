# LaunchFileAsync Method


Starts the default app associated with the specified storage file or folder.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<bool> LaunchFileAsync(
	IStorageItem storageItem
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function LaunchFileAsync ( 
	storageItem As IStorageItem
) As Task(Of Boolean)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LaunchFileAsync : 
        storageItem : IStorageItem -> Task<bool> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/ILauncher.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a></dt><dd>The file or folder.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  
True, if launch operation was successful. False, if unsupported or failed.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

