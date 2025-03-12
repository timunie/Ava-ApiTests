# GraphicsAdapterSelectionCallback Property


Specifies a callback method to be called when compositor needs to create a platform graphics device Currently is only called for AngleEgl rendering mode when DirectX 11 is used



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<IReadOnlyList<PlatformGraphicsDeviceAdapterDescription>, int>? GraphicsAdapterSelectionCallback { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property GraphicsAdapterSelectionCallback As Func(Of IReadOnlyList(Of PlatformGraphicsDeviceAdapterDescription), Integer)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GraphicsAdapterSelectionCallback : Func<IReadOnlyList<PlatformGraphicsDeviceAdapterDescription>, int> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs#L178" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_PlatformGraphicsDeviceAdapterDescription">PlatformGraphicsDeviceAdapterDescription</a>), <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)

## See Also


#### Reference
<a href="T_Avalonia_Win32PlatformOptions">Win32PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

