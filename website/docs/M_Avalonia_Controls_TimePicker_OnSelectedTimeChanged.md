import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnSelectedTimeChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSelectedTimeChanged(
	TimeSpan? oldTime,
	TimeSpan? newTime
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSelectedTimeChanged ( 
	oldTime As TimeSpan?,
	newTime As TimeSpan?
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSelectedTimeChanged : 
        oldTime : Nullable<TimeSpan> * 
        newTime : Nullable<TimeSpan> -> unit 
override OnSelectedTimeChanged : 
        oldTime : Nullable<TimeSpan> * 
        newTime : Nullable<TimeSpan> -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TimePicker">TimePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
