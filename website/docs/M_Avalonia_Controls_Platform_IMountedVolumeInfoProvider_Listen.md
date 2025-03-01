import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Listen Method


Listens to any changes in volume mounts and forwards updates to the referenced <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection</a>(<a href="T_Avalonia_Controls_Platform_MountedVolumeInfo">MountedVolumeInfo</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_IMountedVolumeInfoProvider">IMountedVolumeInfoProvider Interface</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
