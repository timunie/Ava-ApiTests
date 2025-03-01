import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Paint Property




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action<Rect>? Paint { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Paint As Action(Of Rect)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Paint : Action<Rect> with get, set
override Paint : Action<Rect> with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(Rect)

#### Implements
<a href="P_Avalonia_Platform_ITopLevelImpl_Paint">ITopLevelImpl.Paint</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase">OffscreenTopLevelImplBase Class</a>  
<a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen Namespace</a>  
