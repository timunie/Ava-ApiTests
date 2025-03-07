# Listen Method


Listens to any changes in volume mounts and forwards updates to the referenced <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDisposable Listen(
	ObservableCollection<MountedVolumeInfo> mountedDrives
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Listen ( 
	mountedDrives As ObservableCollection(Of MountedVolumeInfo)
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Listen : 
        mountedDrives : ObservableCollection<MountedVolumeInfo> -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Dialogs/IMountedVolumeInfoProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection</a>(<a href="T_Avalonia_Controls_Platform_MountedVolumeInfo">MountedVolumeInfo</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_IMountedVolumeInfoProvider">IMountedVolumeInfoProvider Interface</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
