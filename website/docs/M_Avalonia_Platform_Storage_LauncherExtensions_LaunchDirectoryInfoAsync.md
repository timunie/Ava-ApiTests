# LaunchDirectoryInfoAsync Method


Starts the default app associated with the specified storage directory (folder).



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task<bool> LaunchDirectoryInfoAsync(
	this ILauncher launcher,
	DirectoryInfo directoryInfo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function LaunchDirectoryInfoAsync ( 
	launcher As ILauncher,
	directoryInfo As DirectoryInfo
) As Task(Of Boolean)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member LaunchDirectoryInfoAsync : 
        launcher : ILauncher * 
        directoryInfo : DirectoryInfo -> Task<bool> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/ILauncher.cs#L61" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a></dt><dd>ILauncher instance.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.directoryinfo" target="_blank" rel="noopener noreferrer">DirectoryInfo</a></dt><dd>The directory.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_LauncherExtensions">LauncherExtensions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

